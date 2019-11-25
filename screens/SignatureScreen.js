import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Signature from 'react-native-signature-canvas';
 
export default function SignatureScreen(props) {
  let [signature, setState] = useState(null);
  function handleSignature(signature){
    setState(signature);
  }
  function handleEmpty() {
    console.log('Empty');
  }
  const style = `.m-signature-pad--footer
  .button {
    background-color: red;
    color: #FFF;
  }`;

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.preview}>
        {signature ? (
          <Image
            resizeMode={"contain"}
            style={{ width: 335, height: 114 }}
            source={{ uri: signature }}
          />
        ) : null}
      </View>
      <Signature
        onOK={handleSignature}
        onEmpty={handleEmpty}
        descriptionText="Create"
        clearText="Clear"
        confirmText="Save"
        webStyle={style}
      />
    </View>
  )
}
SignatureScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  preview: {
    width: '100%',
    height: 300,
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15
  },
  previewText: {
    color: "#FFF",
    fontSize: 14,
    height: 40,
    lineHeight: 40,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#69B2FF",
    width: 120,
    textAlign: "center",
    marginTop: 10
  }
});