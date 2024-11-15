import { Request, Response } from 'express';
import { getUsers } from './userController';
import { supabase } from '../services/supabaseClient';

jest.mock('../services/supabaseClient');

describe('User Controller', () => {
  it('should get users', async () => {
    const mockUsers = [{ id: '1', email: 'test@example.com' }];
    (supabase.from as jest.Mock).mockReturnValue({
      select: jest.fn().mockResolvedValue({ data: mockUsers, error: null }),
    });

    const req = {} as Request;
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    } as unknown as Response;

    await getUsers(req, res);

    expect(res.json).toHaveBeenCalledWith(mockUsers);
  });
});
