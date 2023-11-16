import * as Notifications from "expo-notifications";

class NotificationService {
    constructor() {
        this.registerForPushNotifications();
    }

    private async registerForPushNotifications() {
        // эта функция включает отображение уведомлений (ее вызываем в начала, так как после хз почему она не работала)
        Notifications.setNotificationHandler({
            handleNotification: async () => ({
                shouldPlaySound: false,
                shouldSetBadge: false,
                shouldShowAlert: true,
            }),
        });

        // а здесь получаем доступ для отправки пуш уведомлений
        if (!(await await Notifications.getPermissionsAsync()).granted) {
            await Notifications.requestPermissionsAsync();
        }
    }

    async createPush(title, body): Promise<string> {
        const token = Notifications.scheduleNotificationAsync({
            content: {
                title: title,
                body: body,
            },
            trigger: null,
        });

        return token;
    }
}

const notificationService = new NotificationService();

export default notificationService;
