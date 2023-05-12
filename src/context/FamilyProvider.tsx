import { createContext, useState, useContext, ReactNode, useEffect } from "react";
import useLocalStoreage from "../hooks/useLocalStoreage";
import { EmptyFamiliaResponse, FamiliaResponse } from "../models/ResponseModels";
import { InfoFamilia } from "../services/FamiliaService";

const familiaContext = createContext<FamiliaResponse>(EmptyFamiliaResponse);
const voidFamilyContext = createContext(((familia: FamiliaResponse) => { }));

export const useFamilyContext = () => useContext(familiaContext);
export const useVoidFamilyContext = () => useContext(voidFamilyContext);

type PropsChatProvider = {
  children: ReactNode
}

const FamilyProvider = ({ children }: PropsChatProvider) => {
  const [init, setInit] = useLocalStoreage<FamiliaResponse>("familia", EmptyFamiliaResponse)

  const [familia, setFamilia] = useState<FamiliaResponse>(init);


  const voidFamily = (familia: FamiliaResponse) => {
    setFamilia(familia)
    setInit(familia)
  }


  useEffect(() => {
    getFamilia()
  }, [])

  const getFamilia = async () => {
    await InfoFamilia(familia.codigofamiliar)
      .then(data => {
        setFamilia(data)
        setInit(data)
      })
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

