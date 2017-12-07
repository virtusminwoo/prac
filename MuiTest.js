import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';

const styles = theme => ({
    
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },

    formControl: {
        margin: theme.spacing.unit,
        width: 100,
        height : 150
    },
  
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
        width : 100,
        height : 50,
        color : '#E74E51',
        fontWeight : 800,
        textAlign : "center",
        textDecoration : "none"
    },    

    menuItem :{
        fontWeight : 800,
        width : 100,
        hieght : 30,
        padding : "10px 10px",
        backgroundColor :"rgba(255, 255, 255, 1)",
        boxShadow: "10px rgba(0,0,0,0.3)",
        '&:hover': {
            backgroundColor: 'gray',
        },
        '&:focus': {
            background: theme.palette.common.white,
            '&:hover': {
                backgroundColor: 'gray',
            }
        }
        },

     menuItemTextMain :{
        color : "#D06C8E"
    }
});





class MuiTest extends React.Component {
    


    state = {
        age: 10,
        name: 'hai',
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
    
    const { classes } = this.props;

    return (
      <form className={classes.container} autoComplete="off">
        
        <FormControl className={classes.formControl}>
                <Select
                    value={this.state.age}
                    name="age"
                    onChange={this.handleChange}
                    displayEmpty
                    className={classes.selectEmpty}
                    disableUnderline="true"
                >
                    <MenuItem value={10} className={classes.menuItem}><span className={classes.menuItemTextMain}>전체</span></MenuItem>
                    <MenuItem value={20} className={classes.menuItem}>상위랭커</MenuItem>
                </Select>
        </FormControl>
        
      </form>
    );
  }
}

MuiTest.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(MuiTest);