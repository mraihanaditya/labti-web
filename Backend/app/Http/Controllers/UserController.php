<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Fetch all users in descending order of creation.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $users = User::latest()->get();
        return response()->json($users, 200);
    }

    /**
     * Store a new user into the database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email|unique:users,email',
                'password' => 'required|min:6',
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['errors' => $e->errors()], 422);
        }        

        $validatedData['password'] = bcrypt($validatedData['password']);
        $user = User::create($validatedData);

        return response()->json(['message' => 'User created successfully', 'user' => $user], 201);
    }

    /**
     * Retrieve a specific user by ID.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit($id)
    {
        $user = User::findOrFail($id);
        return response()->json($user, 200);
    }

    /**
     * Update an existing user's information.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => "required|email|unique:users,email,{$id}",
        ]);

        $user->update($validatedData);

        return response()->json(['message' => 'User updated successfully', 'user' => $user], 200);
    }

    /**
     * Delete a user from the database.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return response()->json(['message' => 'User deleted successfully'], 200);
    }
}
