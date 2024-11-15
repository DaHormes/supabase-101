import {Request, Response} from 'express';
import {supabase} from '../services/supabaseClient';

export const getUsers = async (req: Request | any, res: Response | any) => {
    const {data, error} = await supabase
        .from('users')
        .select('*');

    if (error) {
        return res.status(500).json({error: error.message});
    }

    res.json(data);
};

export const createUser = async (req: Request | any, res: Response | any) => {
    const {email, password} = req.body;

    const {data, error} = await supabase.auth.signUp({
        email,
        password,
    });

    if (error) {
        return res.status(500).json({error: error.message});
    }

    res.json(data);
};

export const updateUser = async (req: Request | any, res: Response | any) => {
    const {id} = req.params;
    const {email} = req.body;

    const {data, error} = await supabase
        .from('users')
        .update({email})
        .eq('id', id);

    if (error) {
        return res.status(500).json({error: error.message});
    }

    res.json(data);
};

export const deleteUser = async (req: Request | any, res: Response | any) => {
    const {id} = req.params;

    const {data, error} = await supabase
        .from('users')
        .delete()
        .eq('id', id);

    if (error) {
        return res.status(500).json({error: error.message});
    }

    res.json({message: 'User deleted successfully'});
};
