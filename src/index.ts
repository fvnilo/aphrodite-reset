import GlobalStyleExtension from './globalStyleExtension';
import resetStyle from './reset';

const styleSheet = GlobalStyleExtension.StyleSheet.create(resetStyle);

export default GlobalStyleExtension.css(styleSheet.globals);
