import MiniDrawer from '../../utility/drawer';
import { useRouter } from 'next/router'

function HomePlayer(props) {
  const router = useRouter()
  console.log(props);
  return (
    <div>test</div>
  );
}
export default HomePlayer;