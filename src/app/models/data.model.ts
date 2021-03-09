export interface State {
    id: number;
    name: string;
  }

export interface LGA {
    id: number;
    name: string;
  }

export interface Income {
    id: number;
    amount: number;
  }

  export interface LEducation {
    id: number;
    name: string;
  }


  export interface ESector {
    id: number;
    name: string;
  }

  export interface Elegibility {
      state? : string;
      lga? : string;
      employmentStatus? : string;
      monthlyIncome? : number;
      bvn? : number;
      dob? : string;
      firstName? : string;
      lastName? : string;
      middleName? : string;
      email? : string;
      phone? : string;
      gender? : string;
  }

  export interface Personal {
      residentialStatus? : string;
      residentialAddress? : string;
      dateMovedIn? : string;
      maritalStatus? : string;
      levelEducation? : string;
  }

  export interface Employment {
      employerName? : string;
      employerSector? : string;
      employmentStartDate? : string;
      officeAddress? : string;
      workEmail? : string;
  }

  export interface DataDetails {
    elegibility?: Elegibility;
    personal?: Personal;
    employment?: Employment;
  }