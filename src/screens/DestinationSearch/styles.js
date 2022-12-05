import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 10,
        // backgroundColor:'#eee',
        height:'100%'
    },
    textInput: {
        padding: 10,
        backgroundColor: '#eee',
        marginVertical: 5,
        marginLeft: 20,
    },


    separator:{
        backgroundColor: '#dddddd',
        height: 1.5,
      },

      listView: {
        position: 'absolute',
        top: 113,
      },

      autoCompleteContainer: {
        position: 'absolute',
        top: 0,
        left: 10,
        right: 10,
      },
      
      container: {
        position: 'absolute',
        top: 55,
        left: 10,
        right: 10,
      },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },

    iconContainer: {
        backgroundColor: '#a2a2a2',
        padding: 5,
        borderRadius: 50,
        marginRight: 15,
    },

    locationText: {
        
    },

    circle: {
        width: 5,
        height: 5,
        backgroundColor: 'black',
        position: 'absolute',
        top: 25,
        left: 15,
        borderRadius: 5,
    },

    line: {
        width: 1,
        height: 47,
        backgroundColor: '#c4c4c4',
        position: 'absolute',
        top: 32,
        left: 17,
    },

    square: {
        width: 5,
        height: 5,
        backgroundColor: 'black',
        position: 'absolute',
        top: 83,
        left: 15,
    },
});

export default styles;