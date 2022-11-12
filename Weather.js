import React from 'react';
import { Button, Text, View } from 'react-native';


function abc(){
    alert('Hnay thoi tiet tot');
}

export default function Weather(){
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>
            Click vao day de xem thoi tiet
        </Text>
        <Button
        title="Weather"
        onPress={abc}
      />

    </View>
  );
}