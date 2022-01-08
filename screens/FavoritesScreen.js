import React from 'react';
import { View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import DefaultText from '../components/DefaultText';
import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';
import { useSelector } from 'react-redux';

const FavoritesScreen = props => {
    const favMeals = useSelector(state => state.meals.favoriteMeals);

    if (favMeals.length === 0 || !favMeals) {
        return (
        <View style={styles.content}>
            <DefaultText>No favorite meals found. Start adding some!</DefaultText>
        </View>
        );
    }

    return (
        <MealList listData={favMeals} navigation={props.navigation}/>
    );
}

FavoritesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Your Favorites',
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item title='menu' iconName='ios-menu' onPress={() => {
                            navData.navigation.toggleDrawer();
                        }}/>
                    </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavoritesScreen;