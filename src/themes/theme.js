import {createMuiTheme} from '@material-ui/core/styles';
import {orange} from '@material-ui/core/colors';

const theme = createMuiTheme({
    spacing: 2,
    status: {
        danger: orange[500],
    },
    color: {
        white: '#fafafa'
    },
});

export default theme;