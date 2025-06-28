package gapi

import (
	db "github.com/noueii/gonext-starter/internal/db/out"
	"github.com/noueii/gonext-starter/internal/pb"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func convertUser(user db.User) *pb.User {
	return &pb.User{
		Id:        user.ID.String(),
		Email:     user.Email,
		Username:  user.Name,
		CreatedAt: timestamppb.New(user.CreatedAt),
		Role:      user.Role,
	}
}
