import {useState} from "react";
import { StyleSheet,Image,Text,TextInput,TouchableHighlight,View,Alert} from "react-native";
const App=()=>{
  const [email,setEmail]=useState("");
  const [password,setpassword]=useState("");
  const onPress=()=>{
    if(email.trim() !== '' ||password.trim()!='') {
      Alert.alert('Thông báo', `Username của bạn là: ${email} và Password của bạn là ${password} `);
    } else {
      Alert.alert('Thông báo', 'Bạn chưa nhập dữ liệu!');
    }
  }
	return(
		<View style={myStyle.container}>
      <Image
        style={myStyle.image}
        source={{uri:"https://th.bing.com/th/id/OIP.iMG3CK7nCkVlcLXGG5dqXwHaJ4?rs=1&pid=ImgDetMain"}}
      />
      <Text style={myStyle.Text}>
        REGISTER
      </Text>
      <TextInput 
        style={myStyle.TextInput}
        onChangeText={setEmail}
        placeholder="Nhap user name"
        value={email}
      />
      <TextInput
        style={myStyle.TextInput}
        onChangeText={setpassword}
        placeholder="Nhap password"
        secureTextEntry
        value={password}
        />
        <TouchableHighlight
          style={myStyle.button}
          onPress={onPress}>
            <Text style={myStyle.buttonText}>
              Login
            </Text>
        </TouchableHighlight>
		</View>
    
	)
}
export default App;
const myStyle =StyleSheet.create(
	{ 
		container: {
			flex:1,				//toan man hinh
      padding:10,
      backgroundColor:"violet"
		},
    Text:{
      fontSize:20,
			fontWeerght:"bold",
			color:"black",
      marginLeft:280
    },
		TextInput:{
			fontSize:20,
			fontWeerght:"bold",
			color:"blue",
			borderWidth:1,
			borderColor:"blue",
			// margin:20,
      marginLeft:20,
      marginRight: 20
		},
		button:{
			backgroundColor:"aqua",
			height:50,
			borderRadius:10,
			justifyContent:"center",
			alignItems:"center",
			margin:15,
		},
		buttonText:{
			color:"Blue",
			fontSize:20,
			fontWeight:"bold",
      margin:10
		},
    image:{
      width:300,
      height:400,
      resizeMode:"contain",
      // marginTop:150,
      // marginRight:70
      margin:0,
      marginTop:60,
      marginRight:40,
      marginLeft:40
    }
	}
)