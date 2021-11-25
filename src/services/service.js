import { users } from './users';

export default class Service {

    onLogin(login, password) {

        return new Promise((resolve, reject) => {
            
            const user = users.find((item) => {
                return (
                    item.login.toLowerCase() === login.toLowerCase()
                    && item.password === password
                );
            });

            setTimeout(() => {
                if (user) {
                    resolve(user);
                } else {
                    reject(new Error('Такого пользователя не существует'));
                }

            }, 100);

        });
    };
};