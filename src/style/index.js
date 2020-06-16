import { makeStyles } from '@material-ui/styles'
import theme from './theme'

const useStyles = payload => makeStyles(payload)()

export { theme, useStyles }
