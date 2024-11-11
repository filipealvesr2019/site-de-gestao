import { withAuth } from '@clerk/nextjs/api';

export default withAuth((req, res) => {
  if (req.auth.sessionId) {
    // Usuário está autenticado
    res.status(200).json({ message: 'Você está autenticado e pode acessar esta rota!' });
  } else {
    // Usuário não está autenticado
    res.status(401).json({ message: 'Acesso não autorizado' });
  }
});
