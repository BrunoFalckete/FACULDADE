package com.trabalho.Trabalho.LP2.Bruno.HttpRequest;

import com.trabalho.Trabalho.LP2.Bruno.record.Comment;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name = "comments", url = "http://localhost:8080")
public interface CommentRequest {

    @GetMapping("/comments")
    List<Comment> getComments();

    @GetMapping("/comments/{id}")
    Comment getCommentById(@PathVariable("id") Long id);

    @PostMapping("/comments")
    Comment createComment(@RequestBody Comment comment);

    @PutMapping("/comments/{id}")
    Comment updateComment(@PathVariable("id") Long id, @RequestBody Comment comment);

    @DeleteMapping("/comments/{id}")
    void deleteComment(@PathVariable("id") Long id);
}
