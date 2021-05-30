import http from "@/plugins/axios";

export default {
  fetchUsers() {
    return http.get("/users");
  },
  fetchUser(id) {
    return http.get(`/users/${id}`);
  },
  createUser(payload) {
    return http.post("/users", payload);
  },
  updateUser(id, payload) {
    return http.put(`/users/${id}`, payload);
  },
  deleteUser(id) {
    return http.delete(`/users/${id}`);
  },
};
