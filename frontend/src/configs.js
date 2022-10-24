let api = "http://localhost:6070"; //"http://localhost:6070";

let kolloqeDocsHost = "https://docs.kolloqe.com";

export const configs = {
  api: api,
  snackbarVerticalPosition: "bottom",
  snackbarHorizontalPostion: "left",

  // DIME
  explainEndpoint: `${api}/api/dime/explain`,
  abortExplainEndpoint: `${api}/api/dime/abort`,
  dimeStatsEndpoint: `${api}/api/dime/stats`,
  modelEndpoint: `${api}/api/dime/model`,
  explanationEndpoint: `${api}/api/dime/explanation`,
  visualizationEndpoint: `${api}/api/dime/explanation/visualize`,
  dimeConfigEndpoint: `${api}/api/dime/configs`,

  // RASAC
  trainModelEndpoint: `${api}/api/rasac/bot/train`,
  abortTrainEndpoint: `${api}/api/rasac/bot/abort`,
  getModelListEnpoint: `${api}/api/rasac/botstore/models`,
  getModelCurveDatapointsEndpoint: `${api}/api/rasac/botstore/curve/`,
  getModelConfigEndpoint: `${api}/api/rasac/botstore/config/`,
  downloadModelEndpoint: `${api}/api/rasac/botstore/models/`,
  deleteModelEndpoint: `${api}/api/rasac/botstore/models/`,
  nluDataEndpoint: `${api}/api/rasac/botstore/nlu/`,

  // SIENA
  annotationsUIEndpoint: `${api}/annotations_ui`,
  saveAnnotatedNLUFilesEndpoint: `${api}/api/siena/save`,
  exportAnnotatedNLUFilesEndpoint: `${api}/api/siena/export`,
  exportKBEndpoint: `${api}/api/siena/knowledge/export`,
  importKBEndpoint: `${api}/api/siena/knowledge/upload`,
  
  // SEETM
  seetmConfigEndpoint: `${api}/api/seetm/configs`,
  seetmMapsEndpoint: `${api}/api/seetm/maps`,

  // KOLLOQE
  kolloqeConfigEndpoint: `${api}/api/kolloqe/configs`,
  kolloqeStatsEndpoint: `${api}/api/kolloqe/stats`,
  kolloqeIntentStatsEndpoint: `${api}/api/kolloqe/intent/stats`,

  // DOCS
  kolloqeDocsHost: `${kolloqeDocsHost}/`,
  kolloqeDocsMatrix: `${kolloqeDocsHost}/compatibility-matrix`,
  kolloqeDocsXAI: `${kolloqeDocsHost}/dev-console/evaluating/xai`,
  kolloqeDocsTokenMapping: `${kolloqeDocsHost}/dev-console/building/token-mapping`,
  kolloqeVersion: `1.0.0`,
  kolloqeGitHub: `https://www.github.com/kolloqe`,
};

export const docLinks = {
  pipelineConfig: `${kolloqeDocsHost}/dev-console/building/pipeline-config`,
  policyConfig: `${kolloqeDocsHost}/dev-console/building/policy-config`
}

export const localStorageKeys = {
  kolloqeWidgetOpen: "kolloqeWidgetOpen",
  kolloqeChatSession: "kolloqeChatSession",
  kolloqeLocalChatSession: "kolloqeLocalChatSession",
  kolloqeSelectedLang: "kolloqeSelectedLang"
}

export const webchatConfigs = {
  initPayload: "/get_started",
  urlEndpoint: "http://localhost:5005",
  socketPath: "/socket.io/",
  title: "Kolloqe ⚡",
  customData: {"language": "en"},
  docViewer: true,
  subtitle: null,
  inputTextFieldHint: "Type a message",
  hideWhenNotConnected: true,
  // connectOn
  // onSocketEvent: {
  //   'bot_uttered': () => console.log('the bot said something'),
  //   'connect': () => console.log('connection established'),
  //   'disconnect': () => doSomeCleanup(),
  // },
  embedded: false,
  showFullScreenButton: false,
  displayUnreadCount: false,
  showMessageDate: false,
  // customMessageDelay
  // params: {
  //   images: {
  //     dims: {
  //       width: 300,
  //       height: 200
  //     }
  //   }
  // },
  storage: "local",
  customComponent: null,
  onWidgetEvent: {},
  linkRegex: /(\[[^[\]]+\]\([^()\s]+\))/g,
  subLinkRegex: /\[([^[\]]+)\]\(([^()\s]+)\)/g,
}

export const kolloqe_ascii = `
█▄▀ █▀█ █░░ █░░ █▀█ █▀█ █▀▀
█░█ █▄█ █▄▄ █▄▄ █▄█ ▀▀█ ██▄
`;


// https://dev.to/rajeshroyal/reactjs-disable-consolelog-in-production-and-staging-3l38
export const GlobalDebug = (function () {
  var savedConsole = console;
  /**
  * @param {boolean} debugOn
  * @param {boolean} suppressAll
  */
  return function (debugOn, suppressAll) {
    var suppress = suppressAll || false;
    if (debugOn === false) {
      // supress the default console functionality
      // eslint-disable-next-line
      console = {};
      console.log = function () { };
      // supress all type of consoles
      if (suppress) {
        console.info = function () { };
        console.warn = function () { };
        console.error = function () { };
      } else {
        console.info = savedConsole.info;
        console.warn = savedConsole.warn;
        console.error = savedConsole.error;
      }
    } else {
      // eslint-disable-next-line
      console = savedConsole;
    }
  };
})();
