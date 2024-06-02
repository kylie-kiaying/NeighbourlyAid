import { Button, Input, VStack, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { registerUser } from '../services/authService';
import { useRouter } from 'next/router';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const toast = useToast();

  const handleRegister = async () => {
    try {
      const data = await registerUser({ email, password, username });
      toast({ title: "Registration Successful", status: "success", duration: 3000 });
      router.push('/main');
    } catch (error) {
      toast({ title: "Registration Failed", description: error.response?.data.detail || "An error occurred", status: "error", duration: 3000 });
    }
  };

  return (
    <VStack spacing={4} p={8}>
      <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handleRegister}>Register</Button>
    </VStack>
  );
};

export default RegisterPage;
