"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('voice-app/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'voice-app/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('voice-app/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'voice-app/config/environment'], function (exports, AppVersionComponent, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = AppVersionComponent['default'].extend({
    version: version,
    name: name
  });

});
define('voice-app/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('voice-app/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('voice-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'voice-app/config/environment'], function (exports, initializerFactory, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = {
    name: 'App Version',
    initialize: initializerFactory['default'](name, version)
  };

});
define('voice-app/initializers/export-application-global', ['exports', 'ember', 'voice-app/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('voice-app/router', ['exports', 'ember', 'voice-app/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;

});
define('voice-app/routes/index', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  if (SPEECH.isCapable()) {
    // the browser supports speech recognition
    SPEECH.onStart(function () {
      // fires once browser recognition has started
    });
    SPEECH.onStop(function () {
      // fires when speech is manually stopped, or on error
    });
    SPEECH.min_confidence = .2; // the default minimum confidence you're willing to accept as a command
    SPEECH.addVoiceCommands([{
      command: "hello",
      callback: function callback() {
        alert("Hello");
        // do something when the user says "show help". Maybe open a help dialog!
      },
      min_confidence: .5 // you can set a confidence level for each command individually
    }]);
    SPEECH.onResult(function (result) {
      // fires after commands set via addVoiceCommands are parsed.
      // result.transcript is the object built by the speech recognition engine.
      // result.confidence is confidence in decimals (0.02392)
    });

    // gets things going. when speech recognition is ready,
    // onStart will be called.
    SPEECH.start({
      min_confidence: .3 // you can also pass config here
    });
  };

  exports['default'] = Ember['default'].Route.extend({
    model: function model() {
      return "hello";
    }
  });

});
define('voice-app/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "voice-app/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1,"id","title");
        var el2 = dom.createTextNode("Welcome to Ember");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[3,0],[3,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('voice-app/templates/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "voice-app/templates/index.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","model",["loc",[null,[1,0],[1,9]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('voice-app/tests/app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function(assert) { 
    assert.ok(true, 'app.js should pass jshint.'); 
  });

});
define('voice-app/tests/helpers/resolver', ['exports', 'ember/resolver', 'voice-app/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('voice-app/tests/helpers/resolver.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('voice-app/tests/helpers/start-app', ['exports', 'ember', 'voice-app/app', 'voice-app/config/environment'], function (exports, Ember, Application, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('voice-app/tests/helpers/start-app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('voice-app/tests/router.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function(assert) { 
    assert.ok(true, 'router.js should pass jshint.'); 
  });

});
define('voice-app/tests/routes/index.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/index.js should pass jshint', function(assert) { 
    assert.ok(false, 'routes/index.js should pass jshint.\nroutes/index.js: line 1, col 26, Missing semicolon.\nroutes/index.js: line 10, col 29, A leading decimal point can be confused with a dot: \'.2\'.\nroutes/index.js: line 17, col 23, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/index.js: line 28, col 23, A leading decimal point can be confused with a dot: \'.3\'.\nroutes/index.js: line 30, col 2, Unnecessary semicolon.\nroutes/index.js: line 3, col 5, \'SPEECH\' is not defined.\nroutes/index.js: line 4, col 3, \'SPEECH\' is not defined.\nroutes/index.js: line 7, col 3, \'SPEECH\' is not defined.\nroutes/index.js: line 10, col 3, \'SPEECH\' is not defined.\nroutes/index.js: line 11, col 3, \'SPEECH\' is not defined.\nroutes/index.js: line 19, col 3, \'SPEECH\' is not defined.\nroutes/index.js: line 27, col 3, \'SPEECH\' is not defined.\nroutes/index.js: line 19, col 28, \'result\' is defined but never used.\n\n13 errors'); 
  });

});
define('voice-app/tests/test-helper', ['voice-app/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('voice-app/tests/test-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function(assert) { 
    assert.ok(true, 'test-helper.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('voice-app/config/environment', ['ember'], function(Ember) {
  var prefix = 'voice-app';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("voice-app/tests/test-helper");
} else {
  require("voice-app/app")["default"].create({"name":"voice-app","version":"0.0.0+7e0ce658"});
}

/* jshint ignore:end */
//# sourceMappingURL=voice-app.map