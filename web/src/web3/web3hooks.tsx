
// Get user infor for users authenticated with particle auth, retrieves a detailed JSON string containing email, username, wallet addresses, UUID, token, etc.
import { useConnectKit } from '@particle-network/connect-react-ui';

const connectKit = useConnectKit();
const userInfo = connectKit.particle.auth.getUserInfo();
