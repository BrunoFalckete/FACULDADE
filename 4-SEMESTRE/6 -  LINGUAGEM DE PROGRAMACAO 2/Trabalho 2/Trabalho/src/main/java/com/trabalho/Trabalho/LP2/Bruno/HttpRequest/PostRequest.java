package com.trabalho.Trabalho.LP2.Bruno.HttpRequest;

import com.trabalho.Trabalho.LP2.Bruno.record.Post;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name = "posts", url = "http://localhost:8080")
public interface PostRequest {

    @GetMapping("/posts")
    List<Post> getPosts();

    @GetMapping("/posts/{id}")
    Post getPostById(@PathVariable("id") Long id);

    @PostMapping("/posts")
    Post createPost(@RequestBody Post post);

    @PutMapping("/posts/{id}")
    Post updatePost(@PathVariable("id") Long id, @RequestBody Post post);

    @DeleteMapping("/posts/{id}")
    void deletePost(@PathVariable("id") Long id);
}