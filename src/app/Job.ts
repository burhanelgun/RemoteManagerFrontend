export class Job {
    jobName: string;
    commandFile: File;
    parametersFile: File;
    executableFile: File;
    executableFiles: FileList;
    parametersFiles: FileList;
    inputFiles: FileList;
    pythonScriptFile: File;
    files: FileList;
    type: string;
  }