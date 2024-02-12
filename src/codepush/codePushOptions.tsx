import CodePush, {
  RemotePackage,
  SyncOptions,
  UpdateDialog,
} from 'react-native-code-push';

let codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.MANUAL,
  //ON_APP_RESUME for every time app coming foreground
  //ON_APP_START for every time app starts
  installMode: CodePush.InstallMode.IMMEDIATE,
};

let updateDialog: UpdateDialog = {
  title: 'Title of UpdateDialog',
  optionalUpdateMessage: 'optional Update Message',
  appendReleaseDescription: true,
  descriptionPrefix: 'Description Prefix',
  mandatoryContinueButtonLabel: 'MandatoryConinueButtonLabel',
  mandatoryUpdateMessage: 'MandatoryUpdateMessage',
  optionalIgnoreButtonLabel: 'OptionalIgnoreButonLabel',
  optionalInstallButtonLabel: 'OptionalInstallButtonLabel',
};

const handleBinaryVersionMismatch = (update: RemotePackage) => {
  // https://github.com/microsoft/react-native-code-push/blob/HEAD/docs/api-js.md#codepushcheckforupdate
  //promise which return ReotePackage
  console.log(
    'handleBinaryVerisonMismatch update details  :::---\n appversion ',
    update.appVersion,
    ' deploymentKey ',
    update.deploymentKey,
    ' description ',
    update.description,
    ' downloadUrl ',
    update.downloadUrl,
    ' failedinstall ',
    update.failedInstall,
    ' isFirstRun',
    update.isFirstRun,
    ' isMandatory ',
    update.isMandatory,
    ' isPending',
    update.isPending,
    ' label ',
    update.label,
    ' packageHash ',
    update.packageHash,
    ' packageSize ',
    update.packageSize,
  );
  //add a check if we will not return this updatePackage
};

let syncOptions: SyncOptions = {
  installMode: CodePush.InstallMode.IMMEDIATE,
  deploymentKey: 'v_PHnNHhWkwUuj3NdCLTPGj_10L1WPtPtuWh2',
  updateDialog: updateDialog,
};

let checkforUpdates = {
  deploymentKey: 'v_PHnNHhWkwUuj3NdCLTPGj_10L1WPtPtuWh2',
};

export {
  syncOptions,
  updateDialog,
  codePushOptions,
  checkforUpdates,
  handleBinaryVersionMismatch,
};
