# from room import Room
from player import Player
from world import World

import random
from ast import literal_eval

from util import Queue

# Load world
world = World()

# You may uncomment the smaller graphs for development and testing purposes.
# map_file = "maps/test_line.txt"
# map_file = "maps/test_cross.txt"
# map_file = "maps/test_loop.txt"
# map_file = "maps/test_loop_fork.txt"
map_file = "maps/main_maze.txt"

# Loads the map into a dictionary
room_graph = literal_eval(open(map_file, "r").read())
world.load_graph(room_graph)

# Print an ASCII map
world.print_rooms()

player = Player(world.starting_room)

# Fill this out with directions to walk
# traversal_path = ['n', 'n']
traversal_path = []
traversal_graph = {}


# ======================================= Maze Bot (Start)===========================================

while len(traversal_graph) < len(room_graph):
    # print(player.current_room.id)

    if player.current_room.id not in traversal_graph:
        traversal_graph[player.current_room.id] = {}
        # =============== mark the current room's exit as question marks ===============
        for exits in player.current_room.get_exits():
            traversal_graph[player.current_room.id][exits] = '?'

    if '?' in traversal_graph[player.current_room.id].values():
        valid_directions = []

        # ("ex" stand for "exit")
        for ex in player.current_room.get_exits():
            # =============== if the current room's exits is ?, then it will be possible direction therefore we append the exit to the possible directions array ===============
            if traversal_graph[player.current_room.id][ex] == '?':
                valid_directions.append(ex)
        # =============== randomly pick any possible direction to go ===============
        # =============== ("pr_direction" stand for "possible random direction") ===============
        pr_direction = random.choice(valid_directions)

        prev_room = player.current_room
        player.travel(pr_direction)
        traversal_graph[prev_room.id][pr_direction] = player.current_room.id
        traversal_path.append(pr_direction)

    else:
        # =============== using breadth first for best possible path for bigger data ===============
        q = Queue()
        path = [player.current_room.id]
        q.enqueue(path)

        visited = set()

        while q.size() > 0:
            path = q.dequeue()
            current_room = path[-1]

            # =============== if current_room is not visited we will add the current room to the visited set ===============
            if current_room not in visited:
                visited.add(current_room)

                # =============== if the current room have unexplored room then we will go to those rooms ===============
                if '?' in traversal_graph[current_room].values():
                    for room in range(len(path) - 1):
                        # =============== find possible direction in each room===============
                        # =============== key will be the possible direction ===============
                        # =============== the value will be represent the room id(number) ===============
                        for key, value in traversal_graph[path[room]].items():
                            # print(traversal_graph[path[room]].items())
                            if value == path[room + 1]:
                                pr_direction = key
                        player.travel(pr_direction)
                        traversal_path.append(pr_direction)
                    break
                else:
                    for ex in traversal_graph[current_room].values():
                        if ex is not None:
                            new_path = list(path)
                            new_path.append(ex)
                            q.enqueue(new_path)

# ======================================= Maze Bot (End)=============================================


# TRAVERSAL TEST
visited_rooms = set()
player.current_room = world.starting_room
visited_rooms.add(player.current_room)

for move in traversal_path:
    player.travel(move)
    visited_rooms.add(player.current_room)

if len(visited_rooms) == len(room_graph):
    print(f"TESTS PASSED: {len(traversal_path)} moves, {len(visited_rooms)} rooms visited")
else:
    print("TESTS FAILED: INCOMPLETE TRAVERSAL")
    print(f"{len(room_graph) - len(visited_rooms)} unvisited rooms")

#######
# UNCOMMENT TO WALK AROUND
#######
# player.current_room.print_room_description(player)
# while True:
#     cmd = input("-> ").lower().split(" ")
#     if cmd[0] in ["n", "s", "e", "w"]:
#         player.travel(cmd[0], True)
#     elif cmd[0] == "q":
#         break
#     else:
#         print("I did not understand that command.")
        