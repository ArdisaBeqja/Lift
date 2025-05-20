import User from '../models/User.js';

export const register = async (req, res, body) => {
  try {
    const { username, password } = JSON.parse(body);
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ message: 'Username already exists' }));
    }

    const user = new User({ username, password });
    await user.save();

    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'User registered successfully' }));
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Server error', error: err.message }));
  }
};

export const login = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      const user = await User.findOne({ username });
      if (!user || !(await user.comparePassword(password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      res.status(200).json({ message: 'Login successful', user: { username: user.username, role: user.role } });

    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  };
