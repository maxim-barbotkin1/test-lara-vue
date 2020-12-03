<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TeamStoreRequest;
use App\Http\Requests\TeamUpdateRequest;
use App\Models\Team;

class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json(['teams' => Team::all()]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  TeamStoreRequest  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(TeamStoreRequest $request)
    {
        $team = Team::create($request->only('name'));

        return response()->json(['team' => $team, 'message' => 'success'], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Team  $team
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Team $team)
    {
        return response()->json(['team' => $team]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  TeamUpdateRequest  $request
     * @param  \App\Models\Team  $team
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(TeamUpdateRequest $request, Team $team)
    {
        $team->update($request->all());
        return response()->json(['message' => 'success']);
    }

}
