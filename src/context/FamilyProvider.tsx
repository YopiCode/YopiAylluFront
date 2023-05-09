import { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { EmptyFamilia, FamiliaModel } from "../models";
import useLocalStoreage from "../hooks/useLocalStoreage";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes";

const familiaContext = createContext<FamiliaModel>(EmptyFamilia);
const voidFamilyContext = createContext(((familia: FamiliaModel) => { }));

export const useFamilyContext = () => useContext(familiaContext);
export const useVoidFamilyContext = () => useContext(voidFamilyContext);

type PropsChatProvider = {
  children: ReactNode
}

const FamilyProvider = ({ children }: PropsChatProvider) => {
  const [codigo, setCodigo] = useLocalStoreage<number>("codigofamiliar", 0)
  const init: FamiliaModel = {
    ...EmptyFamilia,
    codigofamiliar: codigo
  };
  const [familia, setFamilia] = useState<FamiliaModel>(init);
  const navigate = useNavigate()

  // useEffect(() => {
  //   if (familia.codigofamiliar === 0) {
  //     navigate(routes.welcome)
  //   }
  // }, [])
  const voidFamily = (familia: FamiliaModel) => {
    setFamilia(familia)
    setCodigo(familia.codigofamiliar)
  }
  return (
    <familiaContext.Provider value={familia}>
      <voidFamilyContext.Provider value={voidFamily}>
        {children}
      </voidFamilyContext.Provider>
    </familiaContext.Provider>
  );
};

export default FamilyProvider;

