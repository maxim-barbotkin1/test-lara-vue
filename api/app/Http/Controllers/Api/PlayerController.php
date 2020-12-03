<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PlayerStoreRequest;
use App\Http\Requests\PlayerUpdateRequest;
use App\Models\Player;

class PlayerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json(['players' => Player::all()]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  PlayerStoreRequest  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(PlayerStoreRequest $request)
    {
        $player = Player::create($request->only('first_name', 'last_name'));

        return response()->json(['player' => $player, 'message' => 'success'], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Player  $player
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Player $player)
    {
        return response()->json(['player' => $player]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  PlayerUpdateRequest  $request
     * @param  \App\Models\Player  $player
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(PlayerUpdateRequest $request, Player $player)
    {
        $player->update($request->all());
        return response()->json(['message' => 'success']);
    }
}
