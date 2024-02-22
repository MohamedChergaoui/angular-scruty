import { User } from "./user";

export class Analyse {
    id:number;
   
    typeAnalyse:string;
    commantaires:string;
    statusAnalyse:string;
    statusResult:string;
    dateDebut :Date;
    dateFin:Date;
    sousAnalyses :[];
    technicienResponsable: {
        id: number,
        nom: string,
        prenom: string,
        address: string,
        tel: string,
      }
   
}
