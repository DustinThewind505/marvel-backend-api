from utils import Queue


def earliest_ancestor(ancestors, starting_node):
    q = Queue()
    q.enqueue([starting_node])

    while q.size() > 0:
        current_path = q.dequeue()
        new_path = []
        changed = False

        for v in current_path:
            for a in ancestors:
                if a[1] == v:
                    new_path.append(a[0])
                    changed = True
                    q.enqueue(new_path)
        if changed is False:
            if current_path[0] == starting_node:
                return -1
            else:
                return current_path[0]