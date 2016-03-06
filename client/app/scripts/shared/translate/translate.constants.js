angular.module('components.shared.translate.constants', [])

  .constant('PREFIX_LOCALES', 'resources/locales/')
  .constant('SUFFIX_LOCALES', '.json')
  .constant('LOCALES', {
    'en': 'en', 'en_GB': 'en', 'en_US': 'en',
    'pt': 'pt', 'pt_BR': 'pt', 'pt_PT': 'pt',
    'de': 'de', 'de_DE': 'de', 'de_CH': 'de'
  });