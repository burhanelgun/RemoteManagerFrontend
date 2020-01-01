export class Job {
    jobName: string;
    commandFile: File;
    parametersFile: File;
    executableFile: File;
    executableFiles: FileList;
    inputFiles: FileList;
    pythonScriptFile: File;
    files: FileList;
    type: string;
  }