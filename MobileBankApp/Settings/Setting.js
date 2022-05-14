import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,

  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import ChangeAvatar from './ChangeAvatar';
import ChangeBackground from './ChangeBackground';

export default function Setting() {
  const [showAvatar, setShowAvatar] = React.useState(false);
  const [showBackground, setShowBackground] = React.useState(false);
  const [image, setImage] = React.useState('https://cdn-icons-png.flaticon.com/512/7108/7108018.png');
  const PersonalData = [
    {
      id: 1,
      title: 'Đổi ảnh đại diện',
      uri:
        'https://img.icons8.com/external-anggara-flat-anggara-putra/2x/26e07f/external-avatar-interface-anggara-flat-anggara-putra.png',
    },
    {
      id: 2,
      title: 'Đổi ảnh nền',
      uri: 'https://img.icons8.com/fluency-systems-regular/344/26e07f/image.png',
    },
  ];
  const AdvancedData = [
    {
      id: 3,
      title: 'Smart OTP',
      uri:
        'https://img.icons8.com/external-parzival-1997-detailed-outline-parzival-1997/344/26e07f/external-otp-online-lifestyle-parzival-1997-detailed-outline-parzival-1997.png',
    },
    {
      id: 4,
      title: 'Danh bạ chuyển tiền',
      uri:
        'https://img.icons8.com/external-solid-pause-08/2x/26e07f/external-book-phone-solid-pause-08.png',
    },
    {
      id: 5,
      title: 'Mẫu thanh toán',
      uri: 'https://img.icons8.com/ios-filled/344/26e07f/paid-bill.png',
    },
    {
      id: 6,
      title: 'Đổi mật khẩu',
      uri:
        'https://pngset.com/images/icon-password-icon-and-vector-for-free-download-lamp-lock-combination-lock-security-transparent-png-1911465.png',
    },
    {
      id: 7,
      title: 'Cài đặt đăng nhập',
      uri:
        'https://cdn-icons.flaticon.com/png/128/2956/premium/2956958.png?token=exp=1651678937~hmac=e0f33d62d1b51be98c4736eb537b0dba',
    },
    {
      id: 8,
      title: 'Cài đặt khác',
      uri: 'https://cdn-icons-png.flaticon.com/512/3666/3666883.png',
    },
    {
      id: 9,
      title: 'Cài đặt khác',
      uri: 'https://img.icons8.com/fluency-systems-regular/344/26e07f/image.png',
    },
  ];
  const ClickItem = index => {
    if (index === 1){
      setShowAvatar(true);
    }
    else if (index === 2){
      setShowBackground(true);
    }
  };
  const closePopupAvatar = () => {
      setShowAvatar(false);
  };
  const closePopupBackground = () => {
    setShowBackground(false);
  };
  
  const InfoView = () => {
    return (
      <View style={styles.title}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'green', fontWeight: 'bold', paddingLeft: 12 }}>
            Thoát
          </Text>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://img.icons8.com/ios/2x/26e07f/circled-chevron-right.png',
            }}
          />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20}}>
          <Image
            style={{ height: 70, width: 70, marginLeft: 50, borderRadius: 35}}
            source={{
              uri: image,
            }}
          />
          <View
            style={{
              flexDirection: 'column',
              padding: 10,
            }}
          >
            <Text style={{ color: 'green', fontWeight: 'bold' }}>
              Kính chào quý khách
            </Text>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>
              LU DINH LONG
            </Text>
          </View>
        </View>
      </View>
    );
  };
  const renderItem = (item, index) => {
    return (
      <View key={index} style={styles.cardContainer}>
        <TouchableOpacity onPress={() => ClickItem(item.id)} style={{ flexDirection: 'row' }}>
          <View style={{ flex: 7 }}>
            <Text
              style={{
                fontSize: 18,
                color: 'black',
              }}
            >
              {item.title}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Image
              style={{
                height: 30,
                width: 30,
              }}
              source={{
                uri: item.uri,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const PersonalView = () => {
    return (
      <View
        style={{
          flex: 3,
          borderWidth: 1,
          borderColor: 'green',
          borderRadius: 10,
          marginLeft: 10,
          marginRight: 10,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            padding: 10,
          }}
        >
          Cá nhân
        </Text>
        <View>
          {PersonalData.map((e, index) => renderItem(e, index))}
        </View>
      </View>
    );
  };
  const AdvanceSettingView = () => {
    return (
      <View
        style={{
          flex: 3,
          borderWidth: 1,
          borderColor: 'green',
          borderTopEndRadius: 10,
          borderTopStartRadius: 10,
          marginLeft: 10,
          marginRight: 10,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            padding: 10,
          }}
        >
          Cài đặt nâng cao
        </Text>
        <View>
          {AdvancedData.map((e, index) => renderItem(e, index))}
        </View>
      </View>
    );
  };



    return <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <InfoView />
          <PersonalView />
          <AdvanceSettingView />
        </ScrollView>
        {showAvatar && <ChangeAvatar setImage={setImage} closePopup={closePopupAvatar} />}
        {showBackground && <ChangeBackground setBackground={setShowBackground} closePopup={closePopupBackground} />}
      </SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  title: {
    flex: 2,
    flexDirection: 'column',
  },
  button: {
    height: 30,
    width: 80,
    backgroundColor: '#CCFF99',
    alignItems: 'center',
    marginLeft: 270,
    marginTop: 10,
    borderRadius: 20,
    flexDirection: 'row',
  },
  image: {
    height: 20,
    width: 20,
    alignItems: 'center',
  },
  cardContainer: {
    flexDirection: 'column',
    paddingVertical: 10,
    paddingLeft: 10,
    alignItems: 'center',
  },
});
