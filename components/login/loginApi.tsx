import { Auth } from '@components/auth/auth';
import { axiosInstance } from 'api';

interface loginApiProps {
  email: string;
  password: string;
  onSuccess: () => void;
}

export const LoginApi = async ({ email, password, onSuccess }: loginApiProps) => {
  try {
    const response = await axiosInstance.post('/login', {
      email,
      password,
    });
    if (response.status === 200) {
      console.log(response);
      Auth({
        token: response.data.token,
      });
      onSuccess();
    }
  } catch (error) {
    console.log(error);
    alert('이메일 혹은 패스워드가 옳지 않습니다.');
  }
};
