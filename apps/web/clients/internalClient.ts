import { PlatformUserCreateInput, PlatformUser } from '@enterprise-commerce/core/platform/types';
import axios from 'axios';

const registerUser = async (input: PlatformUserCreateInput): Promise<Pick<PlatformUser, "id"> | undefined | null> => {
  try {
    const { data } = await axios.post('http://localhost:3001/register', input);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const loginUser = async (input: PlatformUserCreateInput) => {
  // ToDo: Implement the loginUser function (someone else is working on it)
  return null;
};

const getUser = async (accessToken: string): Promise<PlatformUser | undefined | null> => {
  try {
    if (accessToken != "") {
      const { data } = await axios.get('http://localhost:3001/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return data.user;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default {
  registerUser,
  loginUser,
  getUser
};