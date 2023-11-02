<template>
	<view class="login-page">
		<header class="header">
			<image class="back" src="/static/logo.png"></image>
			<view class="title">{{title}}</view>
		</header>
		<main class="main">
			
		</main>
		<footer class="footer">
			
		</footer>
	</view>
</template>

<script>
	export default{
		props:{
			title:{
				type:String,
				default:''
			}
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login-page{
		width: 100%;
		position: relative;
		
		.header{
			width: 100%;
			text-align: center;
			line-height: 88rpx;
			border-bottom: 1rpx solid #eaeaea;
			.back{
				width: 30rpx;
				height: 30rpx;
				position: absolute;
				top: 30rpx;
				left: 24rpx;
			}
			.title{
				font-size: 30rpx;
				color: #1890ff;
				font-weight: 600;
			}
		}
	}
</style>
