angular.module('app.components.shared.translate.constants', [])

  .constant('PREFIX_LOCALES', 'resources/locales/')
  .constant('SUFFIX_LOCALES', '.json')
  .constant('REGISTERED_LANGUAGE_KEYS', ['en', 'pt', 'de'])
  .constant('LOCALES', {
    'en': 'en', 'en_*': 'en',
    'pt': 'pt', 'pt_*': 'pt',
    'de': 'de', 'de_*': 'de',
  });