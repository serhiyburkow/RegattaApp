import DashboardScreen from "../screens/dashboard/dashboard.view";

export interface tabItem {
    title: string,
    icon: [string, string],
    component: () => JSX.Element,
    options?: {}
}

export const tabs: tabItem[] = [
    {
        title: 'Dashboard',
        icon: ['ios-information-circle', 'ios-information-circle-outline'],
        component: DashboardScreen,
    }
]

