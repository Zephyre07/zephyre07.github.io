import {ICertificateList} from './ICertificateList';

export interface ICertificate{
  
    resourceName:string;
    certificationName:string;
    certificationDate:Date;
    provider:string;
    status:string;
    validTill:Date; 
    lastupdate:Date;

    employeeId: number;
    employeeName:string;
    resourceUserId:string;
    empStatus: string;
    mobileNumber:string;
    capgeminiEmailId: string;
    nordeaEmailId:string;
    ggId:string;
    certificationList: ICertificateList[];
    responseMessage:string;
    responseCode:string;
   
}