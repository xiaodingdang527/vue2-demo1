<template>
	<view class="login-page">
		
		<common-header :title="title"></common-header>
		
		<main class="main">
			<view class="label-value">
				<text>用户名</text>
				<u-input v-model="loginForm.username"></u-input>
			</view>
			<view class="label-value">
				<text>密码</text>
				<u-input v-model="loginForm.password"></u-input>
			</view>
		</main>
		<footer class="footer">
			
		</footer>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				title:'登录',
				loginForm:{
					username:null,
					password:null
				}
			}
		},
		methods:{
			submitLogin(){
				//调接口的操作
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login-page{
		width: 100%;
		position: relative;
		.main{
			width: calc(100% - 100rpx);
			height: 300rpx;
			position: absolute;
			left: 50rpx;
			top: 300rpx;
			background-color: #eaeaea;
			border-radius: 20rpx;
			padding: 30rpx 24rpx;
			box-sizing: border-box;
		}
		.footer{
			width: calc(100% - 100rpx);
			position: fixed;
			bottom: 100rpx;
			left: 50rpx;
			background-color: red;
		}
	}
</style>
