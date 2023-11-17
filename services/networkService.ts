import * as Network from "expo-network";

class NetworkService {
    async isNetworkConnection(): Promise<boolean> {
        if ((await Network.getNetworkStateAsync()).isConnected == false) return false;
        if ((await Network.getIpAddressAsync()).indexOf("0.0.0.0") != -1) return false;
        return true;
    }
}

const networkService = new NetworkService();

export default networkService;
