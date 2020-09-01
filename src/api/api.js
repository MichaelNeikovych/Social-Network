import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {'API-KEY': 'baf77912-c7eb-4f22-8992-ff817be15a85'}
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 5) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
  }
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then(response => response.data);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`).then(response => response.data);
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, {
      status
    }).then(response => response.data);
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);

    return instance.put(`profile/photo/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => response.data);
  },
  saveProfile(profile) {
    return instance.put('profile', profile).then(response => response.data);
  }
}

export const authAPI = {
  getAuth() {
    return instance.get('auth/me').then(response => response.data);
  },
  login(email, password, rememberMe = false) {
    return instance.post('auth/login', {email, password, rememberMe}).then(response => response.data);
  },
  logout() {
    return instance.delete('auth/login').then(response => response.data);
  }
}