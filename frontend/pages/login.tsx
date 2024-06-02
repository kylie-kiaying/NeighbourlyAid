import { Box, Button, Input, VStack, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { loginUser } from '../services/authService';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const toast = useToast();

  const handleLogin = async () => {
    try {
      const data = await loginUser({ email, password });
      toast({ title: "Login Successful", status: "success", duration: 3000 });
      router.push('/main'); 
    } catch (error) {
      toast({ title: "Login Failed", description: error.response?.data.detail || "An error occurred", status: "error", duration: 3000 });
    }
  };

  return (
    <VStack spacing={4} p={8}>
      <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handleLogin}>Login</Button>
    </VStack>
  );
};

export default LoginPage;
