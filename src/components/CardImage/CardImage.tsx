import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {ImageBySize} from '../../models/CommonModels';
import {colors} from '../../styles/colors';
import {commonUtils} from '../../utils/commonUtils';
import {stylesUtils} from '../../utils/styleUtils';

interface Props {
  image: ImageBySize | null;
  title: string;
  onPress: () => void;
}
export const CardImage: React.FC<Props> = ({
  image,
  title,
  children,
  onPress,
}) => {
  const imageSource = commonUtils.getImageSource(image);

  return (
    <Pressable onPress={onPress} style={[styles.container, stylesUtils.shadow]}>
      <Image source={imageSource} style={styles.image} />

      <View style={styles.content}>
        <Text numberOfLines={4} style={styles.name}>
          {title}
        </Text>
        {children}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 16,
    maxHeight: 150,
    borderRadius: 16,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    padding: 8,
  },
  image: {
    width: 150,
    height: 150,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.light,
  },
});
