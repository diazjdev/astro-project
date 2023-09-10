import type { APIRoute } from 'astro';
import { fetchUsers } from '../../data/users';

export const GET: APIRoute = () => {
    return fetchUsers()
};