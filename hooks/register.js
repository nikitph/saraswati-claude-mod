// Edit these strings to personalize the opening invocation and pinned symbol.
const MANTRA = 'ॐ ऐं सरस्वत्यै नमः॥';
const SYMBOL = '|| 卐 ||'; // Upright Hindu swastika (U+5350), an auspicious symbol.

export function register(on) {
  on('session.start', async ($, e, next) => {
    const result = await next(e);
    $.ui.log(MANTRA);
    return result;
  });

  on('ui.render', { component: 'AbovePrompt' }, async ($, e, next) => {
    const existing = await next(e);
    const { Box, Text } = $.ui.resolve(e);
    return Box({
      flexDirection: 'column',
      children: [
        existing,
        Box({
          width: '100%',
          justifyContent: 'center',
          children: Text({ key: 'saraswati-symbol', color: '#d97757', children: SYMBOL }),
        }),
      ],
    });
  });
}
