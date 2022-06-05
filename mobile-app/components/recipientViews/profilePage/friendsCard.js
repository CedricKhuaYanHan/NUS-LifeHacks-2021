import React, { useState } from 'react'
import { Box, HStack, VStack, Heading, Text, Pressable, Button } from 'native-base';
import { Image } from 'react-native-expo-image-cache'
import { Icon } from 'react-native-elements'
import FriendsModal from './friendsModal';

export default function FriendCard(props) {
    const [friendModalVisible, setFriendModalVisible] = useState(false)
    const seeNeeds = () => {
        setFriendModalVisible(!friendModalVisible)
    }

    let handleChat = () => {
        console.log('chat')
        props.toChat()
    }

    return (
        <>
            {/* <FriendsModal modalVisible={friendModalVisible} setModalVisible={setFriendModalVisible} friendName={props.friendName} /> */}
            <Box maxWidth='95%' mx='auto' my={3}
                bg="white"
                shadow={2}
                py={2}
            >
                <Pressable onPress={seeNeeds}>

                    <HStack alignItems="center" space={2}>
                        <Box
                            py={2}
                            px={4}>
                            {/* <Image style={{ my: 'auto', mx: 'auto', height: 50, width: 50, size: 60, borderRadius: 50 }} {...{ preview: 'image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==', uri: props.imageLink }} /> */}
                        </Box>

                        <HStack width='100%' space={14}>
                            <VStack my='auto'>
                                <Heading noOfLines={1} style={{ fontSize: 25 }} >
                                    {props.friendName}
                                </Heading>
                            </VStack>
                            <Button my='auto' onPress={() => { handleChat() }}>Chat here</Button>
                        </HStack>


                    </HStack>

                </Pressable>
            </Box >
        </>
    );
}
