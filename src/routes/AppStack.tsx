import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import EventsMap from '../pages/EventsMap';
import SelectMapPosition from '../pages/CreateEvent/SelectMapPosition';
import EventData from '../pages/CreateEvent/EventData';
import EventDetails from '../pages/EventDetails';
import Header from '../components/Header';

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    headerShown: false,
                    cardStyle: { backgroundColor: '#F2F3F5' },
                }}
            >
                <Screen name="EventsMap" component={EventsMap} />

                <Screen
                    name="SelectMapPosition"
                    component={SelectMapPosition}
                    options={{
                        headerShown: true,
                        header: (props) => (
                            <Header title="Add event" {...props} />
                        ),
                    }}
                />

                <Screen
                    name="EventData"
                    component={EventData}
                    options={{
                        headerShown: true,
                        header: (props) => (
                            <Header title="Add Event" {...props} />
                        ),
                    }}
                />

                <Screen
                    name="EventDetails"
                    component={EventDetails}
                    options={{
                        headerShown: true,
                        header: (props) => (
                            <Header
                                title="Event"
                                showCancel={false}
                                {...props}
                            />
                        ),
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
}