import { useNavigate } from "react-router-dom";
import { useFamilyContext, useVoidFamilyContext } from "../context/FamilyProvider";


export const navigate = (path:string) => useNavigate()(path);
export const setFamilia = useVoidFamilyContext();
export const familia = useFamilyContext();

// export const utils = ()=> {
//   const navigate = useNavigate();
//   const setFamilia = useVoidFamilyContext();
//   const familia = useFamilyContext();

//   return {
//     navigate,
//     setFamilia,
//     familia,
//   };
// }
